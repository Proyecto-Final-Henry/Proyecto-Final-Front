export default function ReviewCard({ reviewArray }) {
  return (
    <div>
      {reviewArray ? (
        reviewArray.map((r) => {
          return (
            <div className="reviewCard" key={r.id}>
              <p>{r.title}</p>
              <p>Calificación: {r.score}</p>
              <p className="reviewDescription">{r.description}</p>
            </div>
          );
        })
      ) : (
        <p>¡Aún no hay reseñas!</p>
      )}
    </div>
  );
}
