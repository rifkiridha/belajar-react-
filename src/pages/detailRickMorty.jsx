import { useParams } from "react-router-dom";
import { getDetailRickMorty } from "../services/rick.services";
import { useState, useEffect } from "react";
import CardChara from "../components/organism/CardCharacter";

const DetailRickMortyPage = () => {
    const { id } = useParams();
    const [chara, setChara] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [gender, setGender] = useState();
    const [species, setSpecies] = useState();
    const [status, setStatus] = useState();

    useEffect(() => {
        getDetailRickMorty(id, (data) => {
            setChara(data);
            setName(data.name);
            setImage(data.image);
            setGender(data.gender);
            setSpecies(data.species);
            setStatus(data.status);
        });
    }, [id]);
    console.log(chara);
    return (
            < div className = "flex bg-gray-800 text-white font-semibold px-4 py-4" >
        <div className='w-full flex flex-wrap justify-center text-center items-center min-h-screen gap-6'>
            <CardChara key={id}>
                <CardChara.Header image={image} id="" />
                <CardChara.Body title={name}>
                    Gender : {gender}
                    <br />
                    Species : {species}
                    <br />
                    Status : {status}
                    <br />
                </CardChara.Body>
            </CardChara>

        </div>
</div >

    );
}

export default DetailRickMortyPage
