import { SetStateAction, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import StarRating from "./StarRating";
import { Button } from "../ui/button";

const StudentQueryQueryForm = ({setQuery}: {setQuery: React.Dispatch<SetStateAction<string>>}) => {
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [group, setGroup] = useState("");
    const [loginTime, setLoginTime] = useState("");

    const query = studentId || name || email || group || loginTime
     
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setQuery(query)
        // console.log({examName, startTime, endTime, state, selectedRating, difficulty})
    }

    const resetForm = () => {
        setEmail("");
        setGroup("");
        setLoginTime("");
        setName("");
        setStudentId("");
    };
    return (
        <section>
            <h2 className="text-2xl font-semibold">Query Form</h2>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="query-form">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {/* Id */}
                        <div className="input-container">
                            <label htmlFor="student-id">ID</label>
                            <Input
                                type="text"
                                name="student-id"
                                id="student-id"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                placeholder="Please enter student id"
                                className="input"
                            />
                        </div>

                        {/* Name */}
                        <div className="input-container">
                            <label htmlFor="student-name">Name</label>
                            <Input
                                type="text"
                                name="student-name"
                                id="student-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Please enter student namee"
                                className="input"
                            />
                        </div>
                        
                        {/* Email */}
                        <div className="input-container">
                            <label htmlFor="student-email">Email</label>
                            <Input
                                type="email"
                                name="student-email"
                                id="student-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter student email"
                                className="input"
                            />
                        </div>

                        {/* Group */}
                        <div className="input-container">
                            <label htmlFor="name">Group</label>
                            <Select onValueChange={(value)=> setGroup(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select group" />
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

{/* Login time */}
                        <div className="input-container">
                            <label htmlFor="login-time">Login Time</label>
                            <Input
                                type="datetime-local"
                                name="login-time"
                                id="login-time"
                                value={loginTime}
                                onChange={(e) => setLoginTime(e.target.value)}
                                placeholder="Login Time"
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

export default StudentQueryQueryForm;
