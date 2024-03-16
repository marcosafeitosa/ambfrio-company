import React from "react";
import '../../index.css'

type Props = {
  // itemCur: string[];
  classDiv?: string,
  classUl?: string,
  iconBoolean: boolean
  // links?: string[]
};

type ListsHeader = {
  content: string[],
  links?: string[],
  icons?: string[]
}

const ListHeader: ListsHeader = {
  content: ['Início', 'Sobre', 'Dicas e Cuidados', 'Contato'],
  links: ['#', '#', '#', '#'],
  icons: [],
}

export default function Lists({ classDiv, classUl, iconBoolean }: Props) {
  const { content, links, icons } = ListHeader;
  return (
    <>
      <div className={classDiv}>
        <ul className={classUl}>
          {content.map((item, index) => {

            iconBoolean && icons?.push(`../../src/Icons/Header/icon-${index + 1}.png`)
            const isLastItem = index === content.length - 1;
            const classNames = isLastItem ? `item-animated p-2 rounded-full text-center` : "";
            return (
              <li key={index} className={`${classNames}`}>
                {/* Usando o operador ternário para renderizar o link, se houver */}
                {iconBoolean && links && links[index] ? (
                  <a className="no-underline text-inherit flex items-center hover:bg-blue-500 transition p-4 active:bg-blue-400 focus:bg-blue-600 sele" href={links[index]}>
                    <span>
                      <img src={icons && icons[index]} height="30px" />
                    </span>
                    {item}</a>
                ) : (
                  <a className="no-underline text-inherit" href={links && links[index]}>
                    {item}</a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// export default function Lists({ itemCur, classDiv, classUl, links = ['#inicio', '#cuidados', '#sobre', '#contato'] }: Props) {
//   return (
//     <>
//       <div className={classDiv}>
//         <ul className={classUl}>
//           {itemCur.map((item, index) => {
//             const isLastItem = index === itemCur.length - 1;
//             const classNames = isLastItem ? "item-animated p-2 rounded-full text-center" : "";
//             return (
//               <li key={index} className={classNames}>
//                 {/* Usando o operador ternário para renderizar o link, se houver */}
//                 {links && links[index] ? (
//                   <a className="no-underline text-inherit" href={links[index]}>{item}</a>
//                 ) : (
//                   <span>{item}</span>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }
