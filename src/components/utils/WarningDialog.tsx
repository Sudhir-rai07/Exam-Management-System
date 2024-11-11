import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react"; // assuming you are using Lucide for the icon

function WarningDialog({num}: {num:number}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Warning</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-6 text-center bg-white border-2 border-purple-500 rounded-lg">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
            <DialogTitle className="text-xl font-semibold">Warning notice</DialogTitle>
          </div>
        </DialogHeader>
        <DialogDescription className="mb-6 text-gray-700">
          You have {num} question{num>1?"s":""} left unanswered. <br />
          Make sure you submit it.
        </DialogDescription>
        <Button  className="text-white bg-blue-500 hover:bg-blue-600">
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default WarningDialog