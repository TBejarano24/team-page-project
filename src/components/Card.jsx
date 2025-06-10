export default function Card(props) {
  return (
    <>
      <div className="flex flex-col p-2 bg-[#ffffff] max-w-54 gap-1">
        <img className="w-50" src={props.img}></img>
        <p className="mb-2 text-[17px]">{props.title}</p>
        <p className="line-through text-[#6b6b6b] text-[14px]">
          {props.precio_anterior}
        </p>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-[24px]">{props.precio_actual}</p>
          <p className="text-[#2fd859] font-semibold">{props.descuento}</p>
        </div>
        <p>
          en{" "}
          <span className="text-[#2fd859] font-semibold">{props.cuotas}</span>
        </p>
        <p className="text-[#2fd859] font-semibold">{props.envios}</p>
      </div>
    </>
  );
}
