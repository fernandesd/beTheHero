import React from 'react';

export default function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

// Pegando o conteúdo
// export default function Header({ children }) {
//     return (
//         <header>
//             <h1>{children}</h1>
//         </header>
//     );
// }

