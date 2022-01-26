import './Tab.css'
// props: active, label (children)

export default function Tab({ active, children, onClick }) {
    return (
        <div className={active ? 'div active' : 'div'} onClick={onClick}>
            {children}
        </div>
    )
}