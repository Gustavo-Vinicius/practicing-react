import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login = () => {
    const inputSenhaRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const emaillength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);



    //SERÁ EXECUTADO SOMENTE UMA VEZ COM O USE EFECT
    useEffect(() => { }, []);

    useEffect(() => {
        console.log(email)
    }, [email]);

    useEffect(() => {
        console.log(senha)
    }, [senha]);



    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)

        if (inputSenhaRef.current !== null) {
            inputSenhaRef.current.focus()
        }
    }, [email, senha]);

    return (
        <div>
            <form>
                <p>Quantidade de caracters no email : {emaillength}</p>
                <label>
                    <span>Email</span>
                    <input value={email}
                           onChange={e => setEmail(e.target.value)}
                           onKeyDown={e => e.key === 'Enter' ? inputSenhaRef.current?.focus() : undefined}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password"
                        value={senha}
                        ref={inputSenhaRef}
                        onChange={e => setSenha(e.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}> Entrar </button>
            </form>
        </div>
    );
} 