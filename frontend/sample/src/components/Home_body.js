

export default function Home_body(props)
{
    return (   <div className="home-page">
            <div className="welcome">
                {`hello${props.name}
                your phone is ${props.phone}`  }
            </div>
        </div>
    )
}