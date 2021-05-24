import React, { useContext, useState } from 'react';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';
import BackDrop from '../Modal/BackDrop';

type fixedMenuProps = {
    language: string;
    closeMenu: () => void;
};

const AddNewProjectMenu: React.FC<fixedMenuProps> = (props) => {


    const [Description, setDescription] = useState("");
    const [Link, setLink] = useState("");
    const { addNewProject } = useContext(ProjectsContext);

    const handleSubmit = () => {
        addNewProject(Description, Link, props.language);
    }

    return <BackDrop onClick={props.closeMenu}>
        <div
            onClick={(e) => { e.stopPropagation() }}
            style={{
                position: "relative",
                width: "500px",
                height: "200px",
                margin: "5% auto", /* Will not center vertically and won't work in IE6/7. */
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: "white"

            }}>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Description</p>
                        <input name="Description" onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        <p>Link</p>
                        <input name="LInk" onChange={e => setLink(e.target.value)} />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>



        </div>

    </BackDrop>
}
export default AddNewProjectMenu;