import { SetStateAction, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const InstructorQueryForm = ({setQuery}: {setQuery: React.Dispatch<SetStateAction<string>>}) => {
    const [instructorId, setInstructorId] = useState("");
    const [instructorName, setInstructorName] = useState("");
    const [instructorEmail, setInstructorEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [loginTime, setLoginTime] = useState("");

    const query = instructorId || instructorName || instructorEmail || subject || loginTime;

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setQuery(query)
        // console.log({examName, startTime, endTime, state, selectedRating, difficulty})
    }

    const resetForm = () => {
        setInstructorEmail("");
        setInstructorId("");
        setLoginTime("");
        setSubject("");
        setInstructorName("");
    };
    return (
        <section>
            <h2 className="text-2xl font-semibold">Query Form</h2>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="query-form">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">


                    <div className="input-container">
                            <label htmlFor="instructor-id">ID</label>
                            <Input
                                type="text"
                                name="instructor-id"
                                id="instructor-id"
                                value={instructorId}
                                onChange={(e) => setInstructorId(e.target.value)}
                                placeholder="Please enter id"
                                className="input"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="instructor-name">Name</label>
                            <Input
                                type="text"
                                name="instructor-name"
                                id="instructor-name"
                                value={instructorName}
                                onChange={(e) => setInstructorName(e.target.value)}
                                placeholder="Please enter instructor name"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={instructorEmail}
                                onChange={(e) => setInstructorEmail(e.target.value)}
                                placeholder="Please enter email"
                                className="input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="name">Subject</label>
                            <Select onValueChange={(value)=> setSubject(value)}>
                                <SelectTrigger className="w-[224px] px-2">
                                    <SelectValue placeholder="Select subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["English", "Maths", "Physics", "Chemistry", "Biology"].map((subject:string, idx:number)=>(
                                        <SelectItem value={subject.toLowerCase()} key={idx}>{subject}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="input-container">
                            <label htmlFor="login-time">Login Time</label>
                            <Input
                                type="datetime-local"
                                name="login-time"
                                id="login-time"
                                value={loginTime}
                                onChange={(e) => setLoginTime(e.target.value)}
                                placeholder="Please enter email"
                                className="input"
                            />
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

export default InstructorQueryForm;
