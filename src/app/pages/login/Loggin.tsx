import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const inputSenhaRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const emaillength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    //SERÁ EXECUTADO SOMENTE UMA VEZ COM O USE EFECT
    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)

    }, [email, senha]);

    return (
        <div>
            <form>
                <p>Quantidade de caracters no email : {emaillength}</p>
                <InputLogin
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter={() => inputSenhaRef.current?.focus()}
                />

                <InputLogin
                label="Senha"
                type="senha"
                value={senha}
                ref ={inputSenhaRef}
                onChange={newValue => setSenha(newValue)}
                />

                <button type="button" onClick={handleEntrar}> Entrar </button>
            </form>
        </div>
    );
} 