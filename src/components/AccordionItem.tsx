import "./AccordionItem.css"
import { PropsWithChildren, useState } from 'react'


export interface IAccordionItemProps {
    title: string;
    isFirstChild?: boolean;
}

export default function AccordionItem(props: PropsWithChildren<IAccordionItemProps>) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className={props.isFirstChild ? "accordion-item" : "accordion-item divider"}>
            <label className="title bold" onClick={() => setIsOpen(!isOpen)}>
                {props.title} <i className={isOpen ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"}></i>
            </label>
            <div className={`children-container ${isOpen ? "" : "closed"}`}>
                {props.children}
            </div>
        </div>
    );
}