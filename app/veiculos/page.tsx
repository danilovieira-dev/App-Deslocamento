'use client'

import DashBoard from '../../components/layout'
import ConsultaVeiculo from '@/components/ConsultaVeiculo'

export default function Veiculos(){
    return (
        <DashBoard>
            <a href="/veiculos/cadastro">Cadastro de Veiculos</a>
            <ConsultaVeiculo/>
        </DashBoard>
    )
}