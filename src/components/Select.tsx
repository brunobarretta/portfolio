import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaAngleDown, FaCheck } from 'react-icons/fa6'
import { useLocale } from '../hooks/useLocale'

const options = [
  {
    id: 1,
    value: 'pt-BR',
    avatar: './brazil.svg',
  },
  {
    id: 2,
    value: 'en',
    avatar: './usa.svg',
  },
  {
    id: 3,
    value: 'ja',
    avatar: './japan.svg',
  }
]

const classNames = (...classes:any) => {
  return classes.filter(Boolean).join(' ')
}

export default function Select() {
  const { locale, changeLanguage } = useLocale()
  const [selected, setSelected] = useState(options.filter((opt:any) => opt.value === locale)[0])

  return (
    <Listbox value={selected} onChange={(item) => {changeLanguage(item.value), setSelected(item)}}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-indigo-800 py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0" />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <FaAngleDown  className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-indigo-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((opt) => (
                  <Listbox.Option
                    key={opt.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={opt}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          <img src={opt.avatar} alt="" className="h-5 w-5 flex-shrink-0" />
                        </div>

                        {selected ? (
                          <span
                            className={'text-white absolute inset-y-0 right-0 flex items-center pr-4'}
                          >
                            <FaCheck  className="h-3 w-3" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}