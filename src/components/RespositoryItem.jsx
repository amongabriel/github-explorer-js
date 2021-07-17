
export default function RepositoryItem({ repository, ...rest }) {


    return (
        <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.html_url}>
                Acessar Repositórios
            </a>
        </li>
    )

}