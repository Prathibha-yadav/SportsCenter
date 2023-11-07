import { useState, useContext, Fragment } from 'react'
import { Disclosure, Menu, Transition, Switch } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

import { Link, useLocation } from "react-router-dom"
import { ThemeContext } from '../context/theme'

const userNavigation = [
  { name: 'Preferences', href: '#' },
  { name: 'Sign out', href: '/logout' },
]

const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');

const Appbar = () => {
  const { pathname } = useLocation()
  const { theme, setTheme } = useContext(ThemeContext)
  const [enabled, setEnabled] = useState(theme === 'dark')

  const toggleTheme = () => {
    let newTheme = ''
    if (theme === 'light') {
      newTheme = 'dark'
    } else {
      newTheme = 'light'
    }
    setEnabled(!enabled)
    setTheme(newTheme)
  }

  const navigation = [
    { name: 'SignUp', href: '/signup', current: false },
    { name: 'SignIn', href: '/signin', current: false },
  ]

  return (
    <>
      <Disclosure as="nav" className="border-b border-slate-200">
        {() => (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                
                <div className="flex-shrink-0">
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
     width="60px" height="60px" viewBox="0 0 485.812 485.812">
    <g>
        <g>
            <path d="M437.455,5.92c-39.008,18.125-79.016,32.037-120.232,41.459c-0.791-10.125-1.582-20.248-2.373-30.373
                c-95.775,1.213-185.859,23.125-271.281,62.969C59.69,152.83,75.805,225.688,91.926,298.543
                c39.006-18.125,79.014-32.041,120.23-41.461c0.791,10.125,1.584,20.25,2.377,30.373c95.774-1.211,185.858-23.123,271.28-62.967
                C469.693,151.633,453.574,78.777,437.455,5.92z M295.873,39.42c1.682,18.943,3.361,37.887,5.041,56.832
                c-17.336,0.801-34.479,2.156-51.646,4.078c-2.191-18.904-4.383-37.809-6.572-56.711C260.371,41.64,278.023,40.242,295.873,39.42z
             M179.738,54.833c2.797,18.795,5.588,37.594,8.389,56.389c-20.137,4.688-39.84,10.607-59.414,17.09
                c-3.387-18.627-6.77-37.254-10.156-55.879C138.738,65.748,159.051,59.896,179.738,54.833z M93.211,213.724
                c-4.627-22.016-9.254-44.029-13.875-66.043c16.164-6.928,32.436-13.32,48.994-19.236c4.045,22.242,8.09,44.48,12.137,66.723
                C124.492,200.871,108.799,207.039,93.211,213.724z M150.986,250.922c-3.383-18.627-6.77-37.254-10.152-55.881
                c18.789-6.457,37.916-11.969,57.311-16.484c2.797,18.795,5.594,37.592,8.391,56.387
                C187.736,239.314,169.197,244.66,150.986,250.922z M198.517,178.467c-3.33-22.445-6.668-44.891-10.002-67.336
                c19.871-4.613,40.016-8.209,60.358-10.754c2.621,22.574,5.242,45.146,7.863,67.719
                C237.115,170.545,217.685,174.021,198.517,178.467z M286.688,260.842c-17.679,1.98-35.33,3.379-53.181,4.203
                c-0.361-4.072-0.723-8.146-1.084-12.217c19.905-3.797,52.619-6.164,52.619-6.164C285.59,251.39,286.138,256.117,286.688,260.842z
                 M263.691,224.76c-2.191-18.902-4.379-37.807-6.572-56.711c16.486-2.045,33.106-3.363,49.812-3.936
                c1.688,18.945,3.359,37.887,5.041,56.832C295.779,221.504,279.672,222.779,263.691,224.76z M436.172,90.742
                c4.623,22.014,9.252,44.025,13.873,66.041c-16.164,6.926-32.434,13.32-48.992,19.234c-4.045-22.24-8.09-44.482-12.137-66.721
                C404.889,103.592,420.582,97.424,436.172,90.742z M378.393,53.543c3.387,18.625,6.77,37.252,10.152,55.879
                c-18.789,6.459-37.914,11.969-57.311,16.486c-2.799-18.795-5.592-37.592-8.389-56.387
                C341.645,65.135,360.182,59.801,378.393,53.543z M328.842,195.97c-1.781-22.779-3.562-45.559-5.344-68.336
                c2.459-0.537,4.916-1.07,7.363-1.637c3.334,22.441,6.67,44.887,10.004,67.334C336.869,194.26,332.859,195.129,328.842,195.97z
                 M349.645,249.631c-2.797-18.797-5.59-37.592-8.391-56.389c20.139-4.691,39.836-10.607,59.414-17.092
                c3.387,18.627,6.771,37.252,10.152,55.881C390.641,238.715,370.33,244.566,349.645,249.631z"/>
            <path d="M0,92.299c0.639,2.252,64.027,226.998,76.131,387.594l30.832-2.324c-12.34-163.736-76.572-391.43-77.221-393.71L0,92.299z"/>
        </g>
    </g>
</svg>
              
                </div> 
                <h2 className="text-3xl font-bold text-black-500">Sports Center</h2>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => { 
                      const isCurrent = pathname.includes(item.href)

                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isCurrent
                              ? 'bg-slate-50 text-blue-700'
                              : 'text-slate-500 hover:text-blue-600',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={isCurrent ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                    )})}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                <Switch
        checked={enabled}
        onChange={toggleTheme}
        className={`${enabled ? 'bg-slate-400' : 'bg-slate-700'}
          relative inline-flex h-[24px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600">
                        <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  )
}

export default Appbar;