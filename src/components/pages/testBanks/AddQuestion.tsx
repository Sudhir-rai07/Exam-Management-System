import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import StarRating from "@/components/utils/StarRating";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddQuestion = ({ headerText }: { headerText: string }) => {
  const [stem, setStem] = useState("");
  const [difficulty, setDifficulty] = useState<number>();
  const [type, setType] = useState("");

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const [avatar, setAvatar] = useState<File | null>();
  const imageRef = useRef<HTMLInputElement | null>(null);

  const [options, setOptions] = useState<number>(3)

  // Handle Rating change
  const handleRatingChange = (rating: number) => {
    setDifficulty(rating);
  };

  //   handle selected Type
  const handleTypeChange = (type: string) => {
    setType(type);
  };

  // Handle file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0]);
    }
  };

  // Ref click
  const triggerFileInput = () => {
    imageRef.current?.click();
  };


  // handle form submit
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle form submission

    console.log(difficulty, type);
    toast.success("Question added");
    
    setTimeout(() => {
      setStem("");
      handleRest();
    }, 300);
  };

  const handleRest = () => {
    setAvatar(null);
    setType("")
    setStem("")
    setDifficulty(0)
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-white bg-blue-500">
          <Plus />
          New
        </Button>
      </DialogTrigger>
      <DialogContent className=""aria-describedby="Add questions to testbank">
        <DialogHeader>
          <DialogTitle className="text-xl">Add {headerText}</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          {/* Stem */}
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Stem
            </Label>
            <Input
              id="stem"
              placeholder="Enter stem"
              className="col-span-3"
              value={stem}
              onChange={(e) => setStem(e.target.value)}
            />
          </div>

          {/* Difficulty */}
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="difficulty" className="text-right">
              Stem
            </Label>
            <StarRating onRatingChange={handleRatingChange} />
          </div>

          <div className="grid items-center grid-cols-4 gap-4">
            <Label className="text-right">Type</Label>
            <div className="col-span-3">
              <RadioGroup
                value={type}
                className="flex items-center gap-3"
                onValueChange={handleTypeChange}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multiple choice" id="r1" />
                  <Label htmlFor="r1">Multiple choice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true/false" id="r2" />
                  <Label htmlFor="r2">T/F</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="short" id="r3" />
                  <Label htmlFor="r3">Short</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {/* Pic */}
          {type === "short" && (
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="image" className="text-right">
                Pic
              </Label>
              <input
                type="file"
                id="image"
                hidden={true}
                ref={imageRef}
                accept="image/*"
                placeholder="Select avatar"
                className="col-span-3"
                onChange={handleFileChange}
              />
              <div
                className="relative w-full h-[200px] overflow-hidden rounded-md bg-gray-200 flex items-center col-span-3"
                onClick={triggerFileInput}
              >
                <Plus
                  size={48}
                  color="white"
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-gray-400/50 top-1/2 left-1/2"
                />
                <p>
                  {avatar && (
                    <img
                      src={URL.createObjectURL(avatar)}
                      className="object-cover w-full h-full"
                    />
                  )}
                </p>
              </div>
            </div>
          )}

          {type === "true/false" && (
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="opt1" className="text-right">
                A
              </Label>{" "}
              <Input
                type="text"
                placeholder="Please Enter"
                id="opt1"
                className="col-span-3"
              />
              <Label htmlFor="opt2" className="text-right">
                B
              </Label>{" "}
              <Input
                type="text"
                placeholder="Please Enter"
                id="opt2"
                className="col-span-3"
              />
            </div>
          )}

          {type === "multiple choice" && (
            <div className="grid items-center grid-cols-4 gap-4">
            <label className="text-right">OptionNum</label>
            <div className="flex justify-between col-span-3 bg-gray-100">
                <span onClick={()=> setOptions(prev => prev-1)} className="text-black bg-gray-300 shadow-md cursor-pointer"><Minus/></span>
                <span className="text-black">{options}</span>
                <span className="text-black bg-gray-300 shadow-md cursor-pointer" onClick={()=> setOptions(prev => prev+1)}><Plus /></span>
            </div>
              {Array.from({length: options}).map((option, idx)=>(
                <>
                <Label key={idx} htmlFor="opt1" className="text-right">
                {String.fromCharCode('A'.charCodeAt(0) + idx)}
              </Label>{" "}
              <Input
                type="text"
                placeholder="Please Enter"
                id="opt1"
                className="col-span-3"
              />
              </>
              ))}
              </div>
          )}

          <DialogFooter className="gap-4">
            <Button type="reset" onClick={handleRest} className="bg-gray-400 ">
              Reset
            </Button>
            <Button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestion;
