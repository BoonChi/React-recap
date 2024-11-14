import {useState} from 'react';

export const Square = ({size, onClick}) => {
    return <div style={{backgroundColor: 'red', width: size, height: size, margin: '1rem'}} onClick={onClick}></div>
}


export const SquareList = ({number}) => {
    const initialState = Array.from({length: number}).map((_each, index) => ({
        id: `${new Date().getTime().toString()}${index}`,
        size: 100
    }))

    const [list, setList] = useState(initialState);
    

    const onClick = (id) => {
        const newList =  list.map((each) => {
            if(each.id === id) {
                each.size += 20
            }
            return each;
        })
        setList(newList)
    }

    return <div style={{display: 'flex'}}>
        {list.map((each) => <Square onClick={() => onClick(each.id)} key={each.id} size={each.size} />)}
    </div>
}

export const DoubleCircle = () => {
    return <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'black'}}>
        <div style={{position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red', top: '50%', left: "50%", transform: 'translate(-50%, -50%)'}}></div>
    </div>
}
