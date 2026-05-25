import { Newspaper } from "lucide-react";

interface NewsArticleProps {
  title: string;
  excerpt: string;
  category: string;
}

export function NewsArticle({ title, excerpt, category }: NewsArticleProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-4 border border-gray-200">
      {/* Header */}
      <div className="mb-3">
        <div className="inline-block bg-gradient-to-r from-[#C8102E] to-red-600 text-white px-3 py-1.5 rounded-lg mb-2 shadow-md">
          <div className="flex items-center gap-1.5">
            <Newspaper className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Politiken</span>
          </div>
        </div>
        <div className="inline-block bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-[10px] font-semibold ml-1.5">
          {category}
        </div>
      </div>

      {/* Article */}
      <article className="mb-3">
        <h1 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h1>

        <p className="text-gray-700 leading-relaxed text-xs line-clamp-3">
          {excerpt}
        </p>
      </article>

      {/* Task */}
      <div className="mt-3 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm">
        <p className="font-bold text-gray-900 mb-1 text-sm">
          🌍 Din opgave
        </p>
        <p className="text-xs text-gray-700 leading-relaxed">
          Klik på kortet for at gætte hvilket land nyheden kommer fra
        </p>
      </div>
    </div>
  );
}
