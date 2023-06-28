'use client'

import DashBoard from '../../components/layout'
import ConsultaCondutor from '@/components/ConsultaCondutor'

export default function Condutores(){
    return (
        <DashBoard>
            <a href="/condutores/cadastro">Cadastro de Condutores</a>
            <ConsultaCondutor/>
        </DashBoard>
    )
}