'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AddLabels, AssignToIcon, BacklogIcon, ChangePriorityIcon, ChangeStatusIcon, DoneIcon, HighIcon, InProgressIcon, LabelIcon, LowIcon, MediumIcon, NoPriorityIcon, PersonIcon, TodoIcon, UrgentIcon } from './icons/command_bar'
import classNames from 'classnames'

const commandOptions = [
  {
    label: "Assign to...",
    icon: AssignToIcon,
    subOptions: [
      { label: "Jori", icon: PersonIcon },
      { label: "Karri", icon: PersonIcon },
      { label: "Tuomas", icon: PersonIcon }
    ]
  },
  {
    label: "Change status...",
    icon: ChangeStatusIcon,
    subOptions: [
      { label: "Backlog", icon: BacklogIcon },
      { label: "Todo", icon: TodoIcon },
      { label: "In Progress", icon: InProgressIcon },
      { label: "Done", icon: DoneIcon }
    ]
  },
  {
    label: "Change priority...",
    icon: ChangePriorityIcon,
    subOptions: [
      { label: "No priority", icon: NoPriorityIcon },
      { label: "Urgent", icon: UrgentIcon },
      { label: "High", icon: HighIcon },
      { label: "Medium", icon: MediumIcon },
      { label: "Low", icon: LowIcon }
    ]
  },
  {
    label: "Add Labels...",
    icon: AddLabels,
    subOptions: [
      { label: "Bug", icon: () => <LabelIcon type="bug" /> },
      { label: "Feature", icon: () => <LabelIcon type="feature" /> },
      { label: "Improvement", icon: () => <LabelIcon type="improvement" /> }
    ]
  }
] as const;

const CommandMenu = () => {
  const commandMenuRef = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton = e.target instanceof Element &&
        e.target.classList.contains('command-menu-button')
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node); //checking if the element we are clicking is outside the commandMenu
      setOpened(clickedOutside ? false : true)
    }

    window.addEventListener('click', toggleCommandMenu)

    //returning an unmount fucntion that removes the eventListner
    return () => {
      window.removeEventListener('click', toggleCommandMenu)
    }
  }, [])

  const currentOptions = useMemo(() => {
    const options = selectedOption === null
      ? commandOptions
      : commandOptions[selectedOption].subOptions

    return options;

  }, [selectedOption])

  useEffect(() => {
    if (!commandMenuRef.current) return
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption])

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        ref={commandMenuRef}
        className={classNames("absolute left-[calc(50%+7.5rem)] w-[90vw] transition-[transform,opacity] shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] flex flex-col items-start md:left-1/2 -translate-x-1/2 rounded-lg  max-w-[64rem] bg-bar border border-bar",
          opened && "translate-y-[12.8rem] md:translate-y-[2.4rem] opacity-100",
          !opened && "translate-y-[12.8rem] opacity-60")}>
        <span className="bg-white/5 text-white/50 px-2 text-xs leading-10 ml-4 mt-2">
          LIN-111 Walkway Lightning
        </span>
        <input type="text"
          placeholder='Type a command or search'
          className='bg-transparent outline-none text-lg p-5 w-full'
        />
        <div className='flex flex-col text-sm text-off-white w-full'>
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              className="command-menu-button gap-3 
              px-5 flex items-center h-[4.6rem] first:bg-bar/[0.15] hover:bg-bar/[0.05] w-full"
              onClick={(ev) => {
                const clickedRootItem = "subOptions" in menuItem;
                setSelectedOption(clickedRootItem ? index : null)
                if (!clickedRootItem) {
                  setOpened(false)
                  // We stop propagation to prevent the click event from
                  // bubbling up to the window and triggering toggleCommandMenu.
                  // This should be prevented because if that funtion ran, it would
                  // oterwise reopen the menu again, because it registers a click
                  // INSIDE the menu.
                  ev.stopPropagation();
                }
              }}
              key={label}>
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommandMenu