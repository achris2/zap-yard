import { Counter } from '@/components/counter'
import { ListingFooter } from '@/components/listingFooter';
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function DescriptionPage() {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          List your charging location and start earning today
        </h2>
      </div>
      <form>
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input name="title" type="text" required placeholder="Write a simple but eye-catching title for your listing!"/>
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea name="description" required placeholder="Describe your Zap Yard"/>
          </div> 
          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              type="number"
              required placeholder="Price per hour in £GPB"
            min={1}
            />
          </div> 
          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input
              name="image"
              type="file"
              required
            />
          </div> 
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">
                    Number of Chargers
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    How many charging points are available at your location?
                  </p>

                </div>
                <Counter name="numberOfChargers"/>

              </div>
            </CardHeader>
          </Card>
        </div>
        <ListingFooter/>
      </form>
    
    
    
    </>
  )
}
