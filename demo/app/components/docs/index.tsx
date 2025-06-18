'use client';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeExample({ code, language = 'tsx', title }: CodeExampleProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      {title && (
        <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
      )}
      <div className="p-4 bg-gray-50">
        <pre className={`language-${language}`}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

interface PropDefinition {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prop
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Default
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {prop.name}
                {prop.required && <span className="text-red-500 ml-1">*</span>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                {prop.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {prop.defaultValue || '-'}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
