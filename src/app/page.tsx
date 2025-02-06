export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          ยินดีต้อนรับ
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">เกี่ยวกับเรา</h2>
            <p>
              เนื้อหาเกี่ยวกับเว็บไซต์ของคุณ...
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">บริการของเรา</h2>
            <ul className="list-disc pl-5">
              <li>บริการที่ 1</li>
              <li>บริการที่ 2</li>
              <li>บริการที่ 3</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
