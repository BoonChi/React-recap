import { useState } from "react";

const SubTree = ({size, index, subTree=false}) => {
    const [hasChildren, setHasChildren] = useState(false);
    const isLast = size === index + 1;
   
    const paddingBottom = isLast? '0.55rem' : '1rem';
    return <div>
<div style={{display: 'flex',padding: '1rem',borderLeft: '1px solid black', paddingLeft: '0' , gap: '0.5rem', height: 0, paddingBottom:  `${paddingBottom}`, cursor: 'pointer'}} onClick={() => setHasChildren(!hasChildren)}>
        <div style={{width: '1rem', height: '0px', borderTop: '1px solid black', marginTop: '0.5rem', backgroundColor: 'transparent'}}></div>
        <div>SubTree</div>
    
        </div>
        {hasChildren && <div style={{display: 'flex', color: 'red', borderLeft: '1px solid black', justifyContent: 'right', width: '150%', paddingTop:'0.5rem'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            {Array.from({length: size}).map((_tree, index) => <SubTree key={index} size={size} index={index} subTree/>)}
            </div>
        </div>}
    </div>
    
}

const Tree = () => {
    const size = 4;
    return <div style={{margin: '1rem'}}>
        <div>Tree</div>
        <div style={{margin: '1rem'}}>{Array.from({length: 4}).map((_tree, index) => <SubTree key={index} size={size} index={index}/>)}</div>
    </div>
}

export default Tree;