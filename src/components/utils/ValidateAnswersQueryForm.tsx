import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import StarRating from "./StarRating";
import { questionDifficulty } from "./utils";
import { Button } from "../ui/button";

const ValidateAnswersQueryForm = () => {
    const [examName, setExamName] = useState("");
    const [dueTime, setDueTime] = useState("");
    const [createTime, setCreateTime] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [group, setGroup] = useState("");
    const [selectedRating, setSelectedRating] = useState(0);
    const difficulty = questionDifficulty(selectedRating)

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log({examName, dueTime, createTime, group, selectedRating, difficulty})
    }

    const resetForm = () => {
        setExamName("");
        setDueTime("");
        setCreateTime("");
        setGroup("");
        setSelectedRating(0);
    };
    return (
        <section>
            <h2 className="text-2xl font-semibold">Query Form</h2>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="query-form">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="input-container">
                            <label htmlFor="created-by">Name</label>
                            <Input
                                type="text"
                                name="created-by"
                                id="created-by"
                                value={examName}
                                onChange={(e) => setExamName(e.target.value)}
                                placeholder="Please enter exam name"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="due-time">Due Time</label>
                            <Input
                                type="datetime-local"
                                name="due-time"
                                id="due-time"
                                value={dueTime}
                                onChange={(e) => setDueTime(e.target.value)}
                                placeholder="Due Time"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="create-time">Create Time</label>
                            <Input
                                type="datetime-local"
                                name="create-time"
                                id="create-time"
                                value={createTime}
                                onChange={(e) => setCreateTime(e.target.value)}
                                placeholder="Create Time"
                                className="input"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="created-by">Created By</label>
                            <Input
                                type="text"
                                name="created-by"
                                id="created-by"
                                value={createdBy}
                                onChange={(e) => setCreatedBy(e.target.value)}
                                placeholder="Please enter exam name"
                                className="input"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="name">Group</label>
                            <Select onValueChange={(value)=> setGroup(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Group" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
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

export default ValidateAnswersQueryForm;
