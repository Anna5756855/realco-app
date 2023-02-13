import React from "react";
import styles from './formControls.module.css'

// const Textarea = (props) => {
//     return (<div>
//         <textarea {...props.input} {...props} />
//     </div>)
// }


const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (<div className={styles.formControl + " " + (hasError ? styles.error : '')}>
        <div>{ hasError && <span>{meta.error}</span> }</div>
        <textarea {...input} {...props} />
       {/* { meta.error ? <span>Some error</span> : null} */}
       
    </div>)
}

const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (<div className={styles.formControl + " " + (hasError ? styles.error : '')}>
    <div>{ hasError && <span>{meta.error}</span> }</div>    
    <input className={styles.input} {...input } {...props} />
   {/* { meta.error ? <span>Some error</span> : null} */}
   
</div>)
}

export {Textarea, Input}