import { useEffect, useState } from "react";
import portfolioService from "@/services/portfolioService";

import PageHeader from "@/components/common/PageHeader";
import LoadingPage from "@/pages/common/LoadingPage";

import AddStockDialog from "@/components/stocks/AddStockDialog";
import CreatePortfolioDialog from "@/components/stocks/CreatePortfolioDialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [portfolioToDelete, setPortfolioToDelete] = useState(null);
  const [holdingToDelete, setHoldingToDelete] = useState(null);

  const [deleting, setDeleting] = useState(false);

  // --------------------------------------------------
  // Fetch portfolios
  // --------------------------------------------------

  const fetchPortfolios = async () => {
    const data = await portfolioService.getPortfolios();

    setPortfolios(data.portfolios);

    /*
     * Select the first portfolio only when:
     * - there is no currently selected portfolio
     * - or the currently selected portfolio no longer exists
     */
    if (
      data.portfolios.length > 0 &&
      !data.portfolios.some((portfolio) => portfolio.id === selectedPortfolioId)
    ) {
      setSelectedPortfolioId(data.portfolios[0].id);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  // --------------------------------------------------
  // Delete portfolio
  // --------------------------------------------------

  const handleDeletePortfolio = async () => {
    if (!portfolioToDelete) {
      return;
    }

    setDeleting(true);

    try {
      await portfolioService.deletePortfolio(portfolioToDelete.id);

      setPortfolioToDelete(null);

      await fetchPortfolios();
    } finally {
      setDeleting(false);
    }
  };

  // --------------------------------------------------
  // Delete holding
  // --------------------------------------------------

  const handleDeleteHolding = async () => {
    if (!holdingToDelete) {
      return;
    }

    setDeleting(true);

    try {
      await portfolioService.deleteStockFromPortfolio(
        holdingToDelete.portfolio_id,
        holdingToDelete.id,
      );

      setHoldingToDelete(null);

      await fetchPortfolios();
    } finally {
      setDeleting(false);
    }
  };

  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return <LoadingPage />;
  }

  // --------------------------------------------------
  // No portfolios
  // --------------------------------------------------

  if (portfolios.length === 0) {
    return (
      <>
        <PageHeader
          title="Portfolio"
          description="Track changes in price, volume, etc. for stocks you invested in."
        />

        <div className="mt-8 rounded-lg border p-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">No portfolios yet</h2>

              <p className="text-sm text-muted-foreground">
                Create a portfolio to start organizing and tracking your stock
                investments.
              </p>
            </div>

            <CreatePortfolioDialog onPortfolioCreated={fetchPortfolios} />
          </div>
        </div>
      </>
    );
  }

  // --------------------------------------------------
  // Selected portfolio
  // --------------------------------------------------

  const selectedPortfolio = portfolios.find(
    (portfolio) => portfolio.id === selectedPortfolioId,
  );

  return (
    <>
      <PageHeader
        title="Portfolio"
        description="Track changes in price, volume, etc. for stocks you invested in."
      />

      <div className="mt-8 space-y-8">
        {/* -------------------------------------------- */}
        {/* Portfolio Selector */}
        {/* -------------------------------------------- */}

        <div className="space-y-2">
          <label className="text-sm font-medium">Portfolio</label>

          <div className="flex items-center gap-2">
            <Select
              value={selectedPortfolioId}
              onValueChange={setSelectedPortfolioId}
            >
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select portfolio">
                  {selectedPortfolio?.name}
                </SelectValue>
              </SelectTrigger>

              <SelectContent>
                {portfolios.map((portfolio) => (
                  <SelectItem key={portfolio.id} value={portfolio.id}>
                    {portfolio.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <CreatePortfolioDialog onPortfolioCreated={fetchPortfolios} />
          </div>
        </div>

        {/* -------------------------------------------- */}
        {/* Selected Portfolio */}
        {/* -------------------------------------------- */}

        {selectedPortfolio && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {selectedPortfolio.name}
              </h2>

              {/* Portfolio actions */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Portfolio actions"
                    />
                  }
                >
                  <MoreHorizontal />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Edit Portfolio</DropdownMenuItem>

                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => setPortfolioToDelete(selectedPortfolio)}
                  >
                    Delete Portfolio
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {selectedPortfolio.description && (
              <p className="text-sm text-muted-foreground">
                {selectedPortfolio.description}
              </p>
            )}
          </div>
        )}

        {/* -------------------------------------------- */}
        {/* Holdings */}
        {/* -------------------------------------------- */}

        {selectedPortfolio && (
          <div className="space-y-4">
            {/* Holdings header */}

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Holdings</h3>

                <p className="text-sm text-muted-foreground">
                  Stocks currently tracked in this portfolio.
                </p>
              </div>

              <AddStockDialog
                portfolioId={selectedPortfolio.id}
                onStockAdded={fetchPortfolios}
              />
            </div>

            {/* ---------------------------------------- */}
            {/* No holdings */}
            {/* ---------------------------------------- */}

            {selectedPortfolio.holdings?.length === 0 ? (
              <div className="rounded-lg border p-8">
                <div className="space-y-2">
                  <h4 className="font-semibold">No stocks added yet</h4>

                  <p className="text-sm text-muted-foreground">
                    Add stocks to start tracking your investments in this
                    portfolio.
                  </p>
                </div>
              </div>
            ) : (
              /* -------------------------------------- */
              /* Holdings table */
              /* -------------------------------------- */

              <div className="w-full overflow-x-auto rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>

                      <TableHead>Ticker</TableHead>

                      <TableHead>Added</TableHead>

                      <TableHead className="text-right">Buy Price</TableHead>

                      <TableHead className="text-right">
                        Current Price
                      </TableHead>

                      <TableHead className="text-right">Change</TableHead>

                      <TableHead className="text-right">% Change</TableHead>

                      <TableHead className="text-right">Total Gain</TableHead>

                      <TableHead className="w-[50px]" />
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {selectedPortfolio.holdings.map((holding) => (
                      <TableRow key={holding.id}>
                        <TableCell className="font-medium">
                          {holding.company_name}
                        </TableCell>

                        <TableCell>{holding.ticker}</TableCell>

                        <TableCell>
                          {new Date(holding.buy_date).toLocaleDateString()}
                        </TableCell>

                        <TableCell className="text-right">
                          ₹{holding.buy_price}
                        </TableCell>

                        <TableCell className="text-right text-muted-foreground">
                          —
                        </TableCell>

                        <TableCell className="text-right text-muted-foreground">
                          —
                        </TableCell>

                        <TableCell className="text-right text-muted-foreground">
                          —
                        </TableCell>

                        <TableCell className="text-right text-muted-foreground">
                          —
                        </TableCell>

                        {/* Holding actions */}

                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger
                              render={
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  aria-label={`Actions for ${holding.company_name}`}
                                />
                              }
                            >
                              <MoreHorizontal />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Stock</DropdownMenuItem>

                              <DropdownMenuItem
                                variant="destructive"
                                onClick={() => setHoldingToDelete(holding)}
                              >
                                Remove Stock
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ================================================= */}
      {/* DELETE PORTFOLIO DIALOG */}
      {/* ================================================= */}

      <AlertDialog
        open={!!portfolioToDelete}
        onOpenChange={(open) => {
          if (!open && !deleting) {
            setPortfolioToDelete(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete "{portfolioToDelete?.name}"?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This will permanently delete the portfolio and all stocks inside
              it. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>

            <AlertDialogAction
              variant="destructive"
              disabled={deleting}
              onClick={handleDeletePortfolio}
            >
              {deleting ? "Deleting..." : "Delete Portfolio"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ================================================= */}
      {/* DELETE HOLDING DIALOG */}
      {/* ================================================= */}

      <AlertDialog
        open={!!holdingToDelete}
        onOpenChange={(open) => {
          if (!open && !deleting) {
            setHoldingToDelete(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Remove "{holdingToDelete?.company_name}"?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This will remove this stock from your portfolio. This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>

            <AlertDialogAction
              variant="destructive"
              disabled={deleting}
              onClick={handleDeleteHolding}
            >
              {deleting ? "Removing..." : "Remove Stock"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PortfolioPage;
