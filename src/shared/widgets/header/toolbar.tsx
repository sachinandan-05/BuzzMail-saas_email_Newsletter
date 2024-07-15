"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
    const { user } = useUser();

    return (
        <>
            <Button color="primary" className="text-lg">
                Start Trial
            </Button>
            {user ? (
                <>
                    <Link href={"/dashboard"}>
                        <Image
                            src={user?.imageUrl}
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </Link>
                </>
            ) : (
                <Link href={"/sign-in"} className="hover:bg-slate-200 px-3 py-2 rounded-md hover:border-black hover:bottom-2">Login</Link>
            )}
        </>
    );
};

export default Toolbar;