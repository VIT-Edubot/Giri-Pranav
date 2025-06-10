import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FeatureModal() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    alert("Feature confirmed!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Launch Feature
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-800 text-white rounded-lg p-6">
        <DialogHeader>
          <DialogTitle>Enable Feature</DialogTitle>
          <DialogDescription>
            Are you sure you want to enable this feature? This action is
            irreversible.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2 mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleConfirm} className="bg-green-600 hover:bg-green-700 text-white">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
