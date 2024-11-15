import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RotateCcw, Search } from "lucide-react";
import { useOrganizationStore } from "@/zustand/store";

const OrganisationQueryForm = ({setQuery}:{setQuery: React.Dispatch<React.SetStateAction<string>>}) => {
    const [organisationId, setOrganisationId] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [email, setEmail] = useState("");
    const [loginTime, setLoginTime] = useState("");

    const {addOrganization} = useOrganizationStore()

    const query = organisationId || organisationName || email || loginTime;
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setQuery(query)
        console.log({})
    }

    const resetForm = () => {
        setOrganisationId("");
        setOrganisationName("");
        setEmail("")
        setLoginTime("")
    };
    return (
        <section>
            <h2 className="text-2xl font-semibold">Query Form</h2>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="query-form">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                    <div className="gap-2 md:flex md:items-center">
                            <label htmlFor="organisation-id">ID</label>
                            <Input
                                type="text"
                                name="organisation-id"
                                id="organisation-id"
                                value={organisationId}
                                onChange={(e) => setOrganisationId(e.target.value)}
                                placeholder="Please enter organisation id"
                                className="input"
                            />
                        </div>

                        <div className="gap-2 md:flex md:items-center">
                            <label htmlFor="organisation-name">Name</label>
                            <Input
                                type="text"
                                name="organisation-name"
                                id="organisation-name"
                                value={organisationName}
                                onChange={(e) => setOrganisationName(e.target.value)}
                                placeholder="Please enter organisation name"
                                className="input"
                            />
                        </div>

                        <div className="gap-2 md:flex md:items-center">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter email"
                                className="input"
                            />
                        </div>
                        <div className="gap-2 md:flex md:items-center">
                            <label htmlFor="login-time">Login Time</label>
                            <Input
                                type="datetime-local"
                                name="login-time"
                                id="Login-time"
                                value={loginTime}
                                onChange={(e) => setLoginTime(e.target.value)}
                                placeholder="Login Time"
                                className="input"
                            />
                        </div>
                    </div>

                    <hr className="h-[50px] w-1"/>
                <div className="flex gap-2">
                   <Button type="submit"> <Search size={18}/>Search</Button>
                   <Button type="reset" onClick={resetForm}><RotateCcw />Reset</Button>
                </div>
                </form>
            </div>
        </section>
    );
};

export default OrganisationQueryForm;
