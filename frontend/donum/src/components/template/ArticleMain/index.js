import React from 'react';
import TitleStandart from '../../../atoms/TitleStandart'
import TxtStandart from '../../../atoms/TxtStandart'
import '../../../../styles/stylePrincipal.css'

const ArticleMain = () => (
    <article id="container">
        <TitleStandart title="WHO?" />
        <div id="adaptation">
            <article>
                <TxtStandart title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nunc ut risus condimentum
                            sodales. Fusce ipsum orci, bibendum eget mi at, porttitor viverra tellus. Donec congue malesuada auctor. 
                            Fusce hendrerit vehicula maximus. In diam purus, vehicula vitae egestas vel, tristique vitae nibh mattis.
                            Suspendisse eu luctus nulla. Suspendisse potenti. Fusce porttitor turpis vel sollicitudin venenatis. 
                            Praesent eleifend sodales metus, sed egestas eros commodo sit amet. Morbi elementum orci et condimentum 
                            venenatis. Vivamus semper dictum aliquam. Nulla iaculis ipsum sit amet mauris consequat ornare. Nullam 
                            viverra a velit vitae"
                />
                <TitleStandart title="HOW?" />
                <TxtStandart title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nunc ut risus condimentum
                            sodales. Fusce ipsum orci, bibendum eget mi at, porttitor viverra tellus. Donec congue malesuada auctor. 
                            Fusce hendrerit vehicula maximus. In diam purus, vehicula vitae egestas vel, tristique vitae nibh mattis.
                            Suspendisse eu luctus nulla. Suspendisse potenti. Fusce porttitor turpis vel sollicitudin venenatis. 
                            Praesent eleifend sodales metus, sed egestas eros commodo sit amet. Morbi elementum orci et condimentum 
                            venenatis. Vivamus semper dictum aliquam. Nulla iaculis ipsum sit amet mauris consequat ornare. Nullam 
                            viverra a velit vitae"
                />
            </article>
        </div>
    </article>
);

export default ArticleMain;
