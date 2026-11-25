#!/usr/bin/env python3
"""Ручная выверка нагрузок (tools/atlas/load_overrides.json) → LoadOverrides.kt."""
import json, pathlib
root = pathlib.Path(__file__).resolve().parents[2]
data = json.loads((root / 'tools/atlas/load_overrides.json').read_text())
J = ['WRISTS', 'SHOULDERS', 'LUMBAR', 'NECK', 'KNEES']
out = ['package ru.mudrya.yoga.catalog', '', 'import ru.mudrya.yoga.engine.Base', 'import ru.mudrya.yoga.model.Joint', '',
       '// Сгенерировано tools/atlas/overrides_to_kotlin.py из load_overrides.json — не править руками.', '',
       'data class LoadOverride(val load: Map<Joint, Int>, val inversion: Boolean, val base: Base? = null)', '',
       '/** Нагрузки, выверенные вручную там, где геометрическое правило ошибается. */',
       'object LoadOverrides {', '    val map: Map<String, LoadOverride> = mapOf(']
for k in sorted(data):
    v = data[k]
    loads = ', '.join(f'Joint.{j} to {int(v.get(j, 0))}' for j in J)
    why = str(v.get('why', '')).replace('\\', '').replace('"', "'").replace('$', '')
    out.append(f'        // {why}')
    base = f', Base.{v["base"]}' if v.get('base') else ''
    out.append(f'        "{k}" to LoadOverride(mapOf({loads}), {str(bool(v.get("inversion", False))).lower()}{base}),')
out += ['    )', '}', '']
(root / 'core/catalog/src/main/kotlin/ru/mudrya/yoga/catalog/LoadOverrides.kt').write_text('\n'.join(out))
print(len(data), 'overrides')
