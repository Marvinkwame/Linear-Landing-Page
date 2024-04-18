'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { KeyboardIllustration } from './illustrations/keyboard'
import { Button, Highlight } from './Button'

const shortcuts = [
    { text: "Opens command line", keys: "⌘k" },
    { text: "Assign issue to me", keys: "i" },
    { text: "Assign issue to", keys: "a" },
    { text: "Change issue status", keys: "s" },
    { text: "Set issue priority", keys: "p" },
    { text: "Add issue labels", keys: "l" },
    { text: "Set due date", keys: "⇧d" },
    { text: "Set parent issue", keys: "⇧⌘p" },
    { text: "Add sub-issue", keys: "⇧⌘o" },
    { text: "Create new issue", keys: "c" },
    { text: "Create new issue from template", keys: "⌥c" },
    { text: "Move to project", keys: "⇧p" },
];

const Keyboardshortcuts = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const illustrationWrapperRef = useRef<HTMLDivElement>(null);
    const activeShortcutIndex = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout>();

    const scheduleTimeout = () => {
        timeoutRef.current = setTimeout(goToNextShortcut, 2500);
    };

    useEffect(() => {
        scheduleTimeout();
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const goToShortcut = (index: number) => {
        clearTimeout(timeoutRef.current);

        if (!wrapperRef.current) return;

        const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
            `button:nth-child(${index + 1})`
        );
        if (!shortcut) return;

        wrapperRef.current.scrollTo({
            left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
            behavior: "smooth",
        });

        if (!illustrationWrapperRef.current) return;

        illustrationWrapperRef.current
            .querySelectorAll(".active")
            .forEach((el) => el.classList.remove("active"));

        const keys = shortcut.dataset.keys || "";
        const keyArray = keys.split("");
        const keyElements = keyArray.map((key) =>
            illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`)
        );

        keyElements.forEach((element) => element?.classList.add("active"));

        activeShortcutIndex.current = index;
        scheduleTimeout();
    };

    const goToNextShortcut = () =>
        goToShortcut((activeShortcutIndex.current + 1) % shortcuts.length);

    const onShortcutButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        goToShortcut(Number(ev.currentTarget.dataset.index));
    };

    return (
        <>
            <div
                ref={illustrationWrapperRef}
                className='mask-keyboard h-full w-full'>
                <KeyboardIllustration />
            </div>
            <div className="overflow-hidden min-h-[4rem] w-full">
                <div
                    ref={wrapperRef}
                    className='mask-shortcutkeys snap-x snap-mandatory flex whitespace-nowrap overflow-auto max-w-full gap-2 min-h-[6rem] pb-8'>
                    {shortcuts.map((shortcut, index) => (
                        <Button
                            className='shrink-0 gap-2 snap-center last:mr-[50vw] first:ml-[50vw]'
                            data-index={index}
                            data-keys={shortcut.keys}
                            onClick={onShortcutButtonClick}
                            variant="secondary"
                            key={shortcut.keys} >
                            <Highlight className='uppercase'>{shortcut.keys}</Highlight>
                            Create new issue
                        </Button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Keyboardshortcuts