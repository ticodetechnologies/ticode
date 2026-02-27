import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "mb-5 overflow-hidden rounded-xl border border-white/10 bg-[#0B1521] transition-all duration-300 hover:bg-[#0F1E2E] hover:scale-[1.01] data-[state=open]:border-white/20 data-[state=open]:bg-[#0F1E2E]",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between px-6 py-5 text-start font-heading text-lg font-bold text-white/90 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <div className="relative ms-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#22D3EE] transition-transform duration-500">
        {/* Horizontal Line (Minus) */}
        <span className="absolute h-[2px] w-3.5 bg-current transition-transform duration-300" />
        {/* Vertical Line (Plus) - Rotates and fades out when open */}
        <span className="absolute h-3.5 w-[2px] bg-current transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base text-white/80 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-2 font-medium leading-relaxed border-t border-white/5 mx-6", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
