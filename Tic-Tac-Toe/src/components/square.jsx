import { TURNS } from '../constants.js';
export function Square({ children, isSelected, updateBoard, index }) {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    const handClick = () => {
        updateBoard(index);
    };

    return (
        <div className={className} onClick={handClick}>
            {children}
        </div >
    )
}

