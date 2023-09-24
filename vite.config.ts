
import {UserConfigExport} from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import {name} from "./package.json"
import path from "path"
const app =async (): Promise<UserConfigExport> => {

  const formattedName = name.match(/[^/]+$/)?.[0] ?? name

  return defineConfig({
    plugins:[
      react(),
      dts({
        insertTypesEntry:true
      })
    ],
    resolve:{
      alias:{
        "@":path.resolve(__dirname,"./src")
      }
    },
    css:{
      postcss:{
        plugins: [tailwindcss]
      }
    },
    build:{
      lib:{
        entry: path.resolve(__dirname,'src/lib/index.ts'),
        name:formattedName,
        formats:['es','umd'],
        fileName:(format) => `${formattedName}.${format}.js`
      },
      rollupOptions:{
        external: ['react','react-dom','tailwindcss'],
        output:{
          globals:{
            react: 'React',
            'react-dom':'ReactDom',
            tailwindcss: 'tailwindcss',
          }
        }
      }
    },
    test:{
      globals:true,
      environment:'jsdom',
    }
  })
}

export default app
