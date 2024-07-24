import SearchHeader from '@/components/SearchHeader';
import { Suspense } from "react";
import "./../globals.css";

export default function layout({ children }) {
    return (
        <Suspense>
            <div>
                <SearchHeader />
                {children}
            </div>
        </Suspense>
    )
}
