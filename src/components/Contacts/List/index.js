import { useState } from 'react'

function List({ contacts }) {

    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
        );
    });

    return (
        <div>
            <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
            <ul>
                {
                    filtered.map((contact, index) => (
                        <li key={index}>{contact.fullName} <span>{contact.phoneNumber}</span> </li>
                    ))
                }
            </ul>

            <span>
                {`${filtered.length} adet kayıt bulumaktadır.`}
            </span>
        </div>
    )
}

export default List
