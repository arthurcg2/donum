import React from 'react'
import InputStandard from '../../atoms/InputStandart'

const ArticleLogin = () => {
    <article id="article-login">
        <InputStandard authorization={true} placeholder={"E-mail:"} minimunvalue={5} maximunvalue={100} type={"text"}/>
        <InputStandard authorization={true} placeholder={"Password"} minimunvalue={6} maximunvalue={15} type={"password"}/>
        
    </article>
}

export default ArticleLogin;