import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

export interface IIconProps {
    type: string
    [propName: string]: any
}

const icons: {
    [type: string]: React.ReactElement
} = {
    article: (
        <path d="M31.414 7.585l-6-6c-0.375-0.375-0.885-0.585-1.414-0.585h-21c-1.654 0-3 1.345-3 3v24c0 1.654 1.346 3 3 3h26c1.654 0 3-1.346 3-3v-19c0-0.531-0.211-1.040-0.586-1.415zM30 28c0 0.553-0.447 1-1 1h-26c-0.553 0-1-0.447-1-1v-24c0-0.553 0.447-1 1-1h20v4h-0.002c0 1.657 1.344 3 3 3h4.002v18zM26.998 9h-1c-1.102 0-2-0.897-2-2h0.002v-4l6 6h-3.002zM15.5 8c-0.276 0-0.5-0.223-0.5-0.5s0.224-0.5 0.5-0.5h5c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-5zM15.5 11c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-5zM15 13.5c0-0.277 0.224-0.5 0.5-0.5h12c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5zM27.5 19c0.275 0 0.5 0.223 0.5 0.5 0 0.275-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.225-0.5-0.5 0-0.277 0.224-0.5 0.5-0.5h23zM27.5 22c0.275 0 0.5 0.223 0.5 0.5 0 0.275-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.225-0.5-0.5 0-0.277 0.224-0.5 0.5-0.5h23zM27.5 25c0.275 0 0.5 0.223 0.5 0.5 0 0.275-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.225-0.5-0.5 0-0.277 0.224-0.5 0.5-0.5h23zM27.5 16c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-23c-0.276 0-0.5-0.223-0.5-0.5s0.224-0.5 0.5-0.5h23zM5 14h7c0.553 0 1-0.447 1-1v-6c0-0.553-0.447-1-1-1h-7c-0.553 0-1 0.447-1 1v6c0 0.552 0.447 1 1 1zM6 8h5v4h-5v-4z" />
    ),
    about: (
        <path d="M6 12h4v8h-4v-8zM22 4v24h4v-24h-4zM14 24h4v-16h-4v16z" />
    ),
    life: (
        <path d="M22.781 16c4.305-2.729 7.219-7.975 7.219-14 0-0.677-0.037-1.345-0.109-2h-27.783c-0.072 0.655-0.109 1.323-0.109 2 0 6.025 2.914 11.271 7.219 14-4.305 2.729-7.219 7.975-7.219 14 0 0.677 0.037 1.345 0.109 2h27.783c0.072-0.655 0.109-1.323 0.109-2 0-6.025-2.914-11.271-7.219-14zM5 30c0-5.841 2.505-10.794 7-12.428v-3.143c-4.495-1.634-7-6.587-7-12.428v0h22c0 5.841-2.505 10.794-7 12.428v3.143c4.495 1.634 7 6.587 7 12.428h-22zM19.363 20.925c-2.239-1.27-2.363-2.918-2.363-3.918v-2.007c0-1 0.119-2.654 2.367-3.927 1.203-0.699 2.244-1.761 3.033-3.073h-12.799c0.79 1.313 1.832 2.376 3.036 3.075 2.239 1.27 2.363 2.918 2.363 3.918v2.007c0 1-0.119 2.654-2.367 3.927-2.269 1.318-3.961 3.928-4.472 7.073h15.677c-0.511-3.147-2.204-5.758-4.475-7.075z" />
    ),
    email: (
        <path d="M29.844 24c1.371-2.355 2.156-5.078 2.156-8 0-8.836-7.164-16-16-16s-16 7.164-16 16 7.164 16 16 16c4.418 0 8.418-1.789 11.312-4.688l-2.832-2.832c-2.171 2.176-5.171 3.52-8.48 3.52-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12c0 1.422-0.273 2.781-0.73 4.047l-0.032-0.047h-3.238v-11.957h-8c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.836 0 3.508-0.645 4.859-1.684 0.727 0.969 1.836 1.641 3.141 1.641h5.844zM20 14.008v2.035c0 2.207-1.797 4-4 4s-4-1.793-4-4 1.797-4 4-4h4v1.965z" />
    ),
    github: (
        <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z" />
    ),
    copyright: (
        <path d="M17.969 16.781v1.703c0 2.203-3.516 3.016-5.719 3.016-4.281 0-7.5-3.266-7.5-7.578 0-4.234 3.187-7.422 7.422-7.422 1.547 0 5.594 0.547 5.594 3.031v1.703c0 0.141-0.109 0.25-0.25 0.25h-1.844c-0.141 0-0.25-0.109-0.25-0.25v-1.094c0-0.984-1.891-1.437-3.172-1.437-2.922 0-4.953 2.109-4.953 5.141 0 3.141 2.125 5.437 5.078 5.437 1.125 0 3.25-0.422 3.25-1.406v-1.094c0-0.141 0.109-0.25 0.234-0.25h1.859c0.125 0 0.25 0.109 0.25 0.25zM12 4c-5.516 0-10 4.484-10 10s4.484 10 10 10 10-4.484 10-10-4.484-10-10-10zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12v0c6.625 0 12 5.375 12 12z" />
    ),
}

const CustomIcon: React.SFC<IIconProps> = ({ type, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 32 32"
    >
        { icons[type] }
    </SvgIcon>
)

export default CustomIcon