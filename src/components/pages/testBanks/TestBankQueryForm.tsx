import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { questionDifficulty } from "@/components/utils/utils";
import { Input } from "@/components/ui/input";
import StarRating from "@/components/utils/StarRating";
import { Button } from "@/components/ui/button";

const TestBankQueryForm = () => {
    const [id, setId] = useState("");
    const [updatedTime, setUpdatedTime] = useState("");
    const [stem, setStem] = useState("");
    const [state, setState] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);
    const difficulty = questionDifficulty(selectedRating)


    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log({id, updatedTime, state, stem,createdBy, selectedRating, difficulty})
    }

    const resetForm = () => {
        setId("");
        setUpdatedTime("");
        setStem("");
        setState("All")
        setCreatedBy("")
        setSelectedRating(0);
    };
    return (
        <section>
            <h2 className="text-2xl font-semibold">Query Form</h2>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="query-form">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="input-container">
                            <label htmlFor="id">ID</label>
                            <Input
                                type="text"
                                name="id"
                                id="id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Please enter question id"
                                className="input"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="stem">Stem</label>
                            <Input
                                type="text"
                                name="stem"
                                id="stem"
                                value={stem}
                                onChange={(e) => setStem(e.target.value)}
                                placeholder="Please enter stem"
                                className="input"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="created-by">Created by</label>
                            <Input
                                type="text"
                                name="created-by"
                                id="created-by"
                                value={createdBy}
                                onChange={(e) => setCreatedBy(e.target.value)}
                                placeholder="Please enter name"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="updated-time">Start Time</label>
                            <Input
                                type="datetime-local"
                                name="updated-time"
                                id="updated-time"
                                value={updatedTime}
                                onChange={(e) => setUpdatedTime(e.target.value)}
                                placeholder="Updated Time"
                                className="input"
                            />
                        </div>
                       
                        <div className="input-container">
                            <label htmlFor="name">Type</label>
                            <Select onValueChange={(value)=> setState(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all" defaultValue={"all"}>All</SelectItem>
                                    <SelectItem value="single-choice">Single Choise</SelectItem>
                                    <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="input-container">
                            <label htmlFor="name">Difficulty</label>
                            <StarRating totalStars={5} initialRating={0} onRatingChange={handleRatingChange} />
                            <span>{difficulty}</span>
                        </div>
                    </div>

                    <hr className="h-[50px] w-1"/>
                <div className="flex gap-2">
                   <Button type="submit">Search</Button>
                   <Button type="reset" onClick={resetForm}>Reset</Button>
                </div>
                </form>
            </div>
        </section>
    );
};

export default TestBankQueryForm;
