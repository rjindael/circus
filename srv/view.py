"""View rendering for Flask integration"""
from pathlib import Path
from typing import Dict, Any
from flask import render_template_string

def view(template: str, data: Dict[str, Any] = None) -> str:
    """Render a view template"""
    data = data or {}
    
    template_path = Path(__file__).parent.parent.parent / "ui" / "views" / f"{template}.html"
    
    if template_path.exists():
        with open(template_path) as f:
            content = f.read()
            return render_template_string(content, **data)
    
    return f"<h1>View not found: {template}</h1>"
