import { useState } from "react";
import portfolioService from "@/services/portfolioService";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreatePortfolioDialog = ({ onPortfolioCreated }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await portfolioService.createNewPortfolio({
        name: formData.name,
        description: formData.description || null,
      });

      setFormData({
        name: "",
        description: "",
      });

      setOpen(false);

      await onPortfolioCreated();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>Create Portfolio</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Portfolio</DialogTitle>

          <DialogDescription>
            Create a portfolio to organize and track your stock investments.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Portfolio Name */}
          <div className="space-y-2">
            <Label htmlFor="portfolio-name">Portfolio Name</Label>

            <Input
              id="portfolio-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Education"
              disabled={loading}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="portfolio-description">Description</Label>

            <Textarea
              id="portfolio-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Optional description"
              disabled={loading}
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Portfolio"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePortfolioDialog;
