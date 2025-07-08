export default function Logo({ width = 180, height = 180 }: { width?: number; height?: number }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="bg-haarika-primary rounded-full p-4 flex items-center justify-center">
        <div className="bg-white rounded-full p-3">
          <div className="bg-haarika-secondary rounded-full p-6 flex items-center justify-center">
            <span className="text-white font-bold text-4xl">H</span>
          </div>
        </div>
      </div>
    </div>
  )
}
