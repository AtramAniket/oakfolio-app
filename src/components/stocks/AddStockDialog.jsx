import { useState } from 'react'
import portfolioService from '@/services/portfolioService'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const AddStockDialog = ({ portfolioId, onStockAdded }) => {
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    company_name: '',
    ticker: '',
    exchange: '',
    quantity: '',
    buy_price: '',
    buy_date: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    try {
      await portfolioService.addStockToPortfolio(portfolioId, {
        company_name: formData.company_name,
        ticker: formData.ticker,
        exchange: formData.exchange,
        quantity: Number(formData.quantity),
        buy_price: formData.buy_price,
        buy_date: `${formData.buy_date}T00:00:00Z`,
      })

      setFormData({
        company_name: '',
        ticker: '',
        exchange: '',
        quantity: '',
        buy_price: '',
        buy_date: '',
      })

      setOpen(false)

      onStockAdded()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>
        Add Stock
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Stock</DialogTitle>

          <DialogDescription>
            Add a stock to your current portfolio.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Company Name */}
          <div className='space-y-2'>
            <Label htmlFor='company_name'>Company Name</Label>

            <Input
              id='company_name'
              name='company_name'
              value={formData.company_name}
              onChange={handleChange}
              placeholder='e.g. Reliance Industries'
            />
          </div>

          {/* Ticker */}
          <div className='space-y-2'>
            <Label htmlFor='ticker'>Ticker</Label>

            <Input
              id='ticker'
              name='ticker'
              value={formData.ticker}
              onChange={handleChange}
              placeholder='e.g. RELIANCE'
            />
          </div>

          {/* Exchange */}
          <div className='space-y-2'>
            <Label>Exchange</Label>

            <Select
              value={formData.exchange}
              onValueChange={(value) =>
                setFormData((previous) => ({
                  ...previous,
                  exchange: value,
                }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder='Select exchange' />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value='NSE'>NSE</SelectItem>

                <SelectItem value='BSE'>BSE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className='space-y-2'>
            <Label htmlFor='quantity'>Quantity</Label>

            <Input
              id='quantity'
              name='quantity'
              type='number'
              min='1'
              step='1'
              value={formData.quantity}
              onChange={handleChange}
              placeholder='e.g. 10'
            />
          </div>

          {/* Buy Price */}
          <div className='space-y-2'>
            <Label htmlFor='buy_price'>Buy Price</Label>

            <Input
              id='buy_price'
              name='buy_price'
              type='number'
              min='0'
              step='0.01'
              value={formData.buy_price}
              onChange={handleChange}
              placeholder='e.g. 2350.43'
            />
          </div>

          {/* Buy Date */}
          <div className='space-y-2'>
            <Label htmlFor='buy_date'>Buy Date</Label>

            <Input
              id='buy_date'
              name='buy_date'
              type='date'
              value={formData.buy_date}
              onChange={handleChange}
            />
          </div>

          <DialogFooter>
            <Button type='submit' disabled={loading}>
              {loading ? 'Adding...' : 'Add Stock'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddStockDialog
