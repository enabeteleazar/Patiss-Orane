import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const doc = new JSDOM(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')).window.document

// index.html est un export "Enregistrer sous > Page web" dont le dossier de
// ressources ("Patisserie Orane_files/") n'a jamais été committé : tous les
// chemins locaux qu'il référence (CSS, JS, images) sont donc cassés. C'est un
// défaut préexistant du contenu, pas un problème d'outillage — le corriger
// demanderait de reconstituer des fichiers absents, hors périmètre de ce test.
// On se limite donc à vérifier la validité structurelle du HTML.
describe('index.html', () => {
  it('a un titre non vide', () => {
    expect(doc.title.trim().length).toBeGreaterThan(0)
  })

  it('déclare un charset UTF-8', () => {
    const metaCharset = doc.querySelector('meta[charset]')
    const metaHttpEquiv = doc.querySelector('meta[http-equiv="Content-Type"]')
    const declaresUtf8 =
      metaCharset?.getAttribute('charset')?.toLowerCase() === 'utf-8' ||
      /charset=utf-8/i.test(metaHttpEquiv?.getAttribute('content') ?? '')
    expect(declaresUtf8).toBe(true)
  })

  it("a un corps de page non vide", () => {
    expect(doc.body.textContent.trim().length).toBeGreaterThan(0)
  })
})
