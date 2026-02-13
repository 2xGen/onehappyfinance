'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';
import { cn } from '@/src/lib/utils';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 flex flex-col border border-border bg-background shadow-lg duration-200 rounded-xl overflow-hidden',
        'w-[calc(100%-2rem)] max-w-lg max-h-[85dvh]',
        'inset-x-4 top-4',
        'md:inset-auto md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:max-h-[90dvh]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        className
      )}
      {...props}
    >
      <div
        className="overflow-y-auto overflow-x-hidden overscroll-contain flex-1 min-h-0 p-6 pb-28"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {children}
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold leading-none', className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-foreground/70', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle, DialogDescription };
