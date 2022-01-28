import React from 'react';
import { useRouter } from 'next/router'
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

function Titulo(props) {
    const Tag = props.tag || "h1";
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.primary["500"]};
                    font-size: 48px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

function Photo(props) {
    const username = props.children;
    return (
        <>
            <Image
                styleSheet={{
                    borderRadius: "50%",
                    marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
                alt={username}
            />
            <Text
                variant="body4"
                styleSheet={{
                    color: appConfig.theme.colors.neutrals["000"],
                    backgroundColor:
                        appConfig.theme.colors.primary["700"],
                    padding: "5px 10px",
                    borderRadius: "1000px",
                }}
            >
                {username}
            </Text>
        </>
    )
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h1">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura MAtrix</h2>
//         </div>
//     );
// }

export default function PaginaInicial() {
    // const username = "josenaldo";
    const [username, setUsername] = React.useState('josenaldo')
    const roteamento = useRouter();
    const [showAvatar, setShowAvatar] = React.useState(false)

    return (
        <>

            <Box
                styleSheet={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: "url("+ appConfig.theme.background + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",
                }}
            >
                <Box
                    styleSheet={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        width: "100%",
                        maxWidth: "700px",
                        borderRadius: "5px",
                        padding: "32px",
                        margin: "16px",
                        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                        backgroundColor: appConfig.theme.colors.neutrals["000"],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function(event){
                            event.preventDefault();
                            console.log('Alguém submeteu o form')
                            // Ativando o roteamento
                            roteamento.push('/chat')
                        }}
                        styleSheet={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: { xs: "100%", sm: "50%" },
                            textAlign: "center",
                            marginBottom: "32px",
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text
                            variant="body3"
                            styleSheet={{
                                marginBottom: "32px",
                                color: appConfig.theme.colors.primary[700],
                            }}
                        >
                            {appConfig.name}
                        </Text>

                        <TextField
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde está o valor
                                const valor = event.target.value;
                                // Trocar o valor da variável através do react e avisa quem precisa

                                setUsername(valor)
                                setShowAvatar(valor.length >= 3)
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor:
                                        appConfig.theme.colors.neutrals[200],
                                    mainColor:
                                        appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight:
                                        appConfig.theme.colors.primary[500],
                                    backgroundColor:
                                        appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            label="Entrar"
                            fullWidth
                            buttonColors={{
                                contrastColor:
                                    appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary["500"],
                                mainColorLight:
                                    appConfig.theme.colors.primary["400"],
                                mainColorStrong:
                                    appConfig.theme.colors.primary["600"],
                            }}
                        />
                    </Box>
                    {/* Formulário */}

                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            maxWidth: "200px",
                            padding: "16px",
                            backgroundColor:
                                appConfig.theme.colors.primary["600"],
                            border: "1px solid",
                            borderRadius: "10px",
                            flex: 1,
                            minHeight: "240px",
                        }}
                    >
                        {showAvatar ? <Photo>{username}</Photo> : ""}
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
