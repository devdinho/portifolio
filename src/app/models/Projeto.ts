export type Projeto = {
    name: string,
    project_type: number,
    project_type_display: string,
    repo_name: string,
    avaliable_at: string,
    stacks: Stack[];
    imagens: Image[];
}
  
export type Stack = {
    name: string;
    stack_type: number;
    skillicon_name: string;
}
  
export type Image = {
    descricao: string;
    img: string;
    ordem: number;
}