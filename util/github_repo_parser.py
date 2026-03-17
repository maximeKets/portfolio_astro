import requests
import json
import os
from typing import Dict, List, Optional, Union
from pathlib import Path

class GitHubRepoParser:
    def __init__(self, token: Optional[str] = None):
        self.token = token
        self.headers = {
            'Accept': 'application/vnd.github.v3+json',
        }
        if token:
            self.headers['Authorization'] = f'token {token}'
        
        # Create projects directory if it doesn't exist
        self.projects_dir = Path('src/config/projects')
        self.projects_dir.mkdir(parents=True, exist_ok=True)

    def get_repo_contents(self, owner: str, repo: str, path: str = '') -> List[Dict]:
        """Get contents of a repository path"""
        url = f'https://api.github.com/repos/{owner}/{repo}/contents/{path}'
        response = requests.get(url, headers=self.headers)
        response.raise_for_status()
        return response.json()

    def parse_directory(self, owner: str, repo: str, path: str = '') -> Dict:
        """Recursively parse a directory structure"""
        contents = self.get_repo_contents(owner, repo, path)
        result = {
            'name': Path(path).name if path else repo,
            'type': 'directory',
            'children': []
        }

        for item in contents:
            if item['type'] == 'dir':
                result['children'].append(self.parse_directory(owner, repo, item['path']))
            else:
                result['children'].append({
                    'name': item['name'],
                    'type': 'file'
                })

        return result

    def create_project_json(self, owner: str, repo: str, title: str, description: str, 
                          repo_url: str, live_url: str, tech_stack: List[str]) -> Dict:
        """Create a project JSON object in the required format"""
        structure = self.parse_directory(owner, repo)
        
        return {
            'id': repo.lower(),
            'title': title,
            'description': description,
            'repoUrl': repo_url,
            'liveUrl': live_url,
            'techStack': tech_stack,
            'structure': {
                'root': repo,
                'children': structure['children']
            },
            'images': []  # You can add images manually later
        }

    def save_project_json(self, project_json: Dict) -> str:
        """Save project JSON to file and return the relative path"""
        filename = f"{project_json['id']}.json"
        filepath = self.projects_dir / filename
        
        with open(filepath, 'w') as f:
            json.dump(project_json, f, indent=4)
        
        return str(filepath.relative_to('src/config'))
    
def main():
    # It is recommended to use environment variables for secrets:
    github_token = os.environ.get("GITHUB_TOKEN", "")

    if not github_token:
        print("⚠️ Attention: La variable GITHUB_TOKEN n'est pas définie. Les dépôts privés seront inaccessibles.")
        print("💡 Vous pouvez le définir via: export GITHUB_TOKEN='votre_token'")
    
    # Passing token to the parser
    parser = GitHubRepoParser(token=github_token)
    
    projects_data = [
        {
            'owner': 'maximeKets',
            'repo': 'portfolio_astro',
            'title': 'Portfolio (This Website)',
            'description': 'An open source interactive portfolio website, with a clean and modern design, sections for education, experience, skills and more. Built with Astro.js, Tailwind CSS, TypeScript, React, and Vercel.',
            'repo_url': 'https://github.com/maximeKets/portfolio_astro',
            'live_url': 'https://maximekets.com',
            'tech_stack': ['Astro.js', 'Tailwind CSS', 'TypeScript', 'React', 'Vercel']
        },
        {
            'owner': 'maximeKets',
            'repo': 'wecrew',
            'title': 'wecrew',
            'description': 'Wecrew project',
            'repo_url': 'https://github.com/maximeKets/wecrew',
            'live_url': '',
            'tech_stack': []
        },
        {
            'owner': 'maximeKets',
            'repo': 'linkedin-mcp-server',
            'title': 'LinkedIn MCP Server',
            'description': 'This MCP server allows Claude and other AI assistants to access your LinkedIn. Scrape LinkedIn profiles and companies, get your recommended jobs, and perform job searches.',
            'repo_url': 'https://github.com/maximeKets/linkedin-mcp-server',
            'live_url': '',
            'tech_stack': ['Python', 'MCP', 'AI']
        },
        {
            'owner': 'maximeKets',
            'repo': 'Zoho_billing_generator',
            'title': 'Zoho Billing Generator',
            'description': 'Récupere les informations de la base de donnée pour créer un facture en apellant l\'api Zoho Invoice',
            'repo_url': '',
            'live_url': '',
            'tech_stack': ['Python', 'Zoho API']
        },
        {
            'owner': 'maximeKets',
            'repo': 'RentIt_java_avance',
            'title': 'RentIt Microservices',
            'description': 'Micro service rest APi in java with Spring',
            'repo_url': 'https://github.com/maximeKets/RentIt_java_avance',
            'live_url': '',
            'tech_stack': ['Java', 'Spring']
        },
        {
            'owner': 'maximeKets',
            'repo': 'django_wagtail_snipcart',
            'title': 'Django Wagtail Snipcart E-Shop',
            'description': 'An E-shop project for selling simple product using wagtail admin for CRUD product',
            'repo_url': 'https://github.com/maximeKets/django_wagtail_snipcart',
            'live_url': '',
            'tech_stack': ['Python', 'Django', 'Wagtail', 'HTML']
        },
        {
            'owner': 'maximeKets',
            'repo': 'TradingBot',
            'title': 'Trading Bot',
            'description': 'TradingBot algorithm',
            'repo_url': '',
            'live_url': '',
            'tech_stack': ['Python']
        },
        {
            'owner': 'maximeKets',
            'repo': 'laravel-phantom-wallet',
            'title': 'Laravel Phantom Wallet',
            'description': 'Laravel & Solana Phantom wallet example built with Bootstrap, JQuery. App connects to Phantom wallet and fetching publicKey and balance information.',
            'repo_url': 'https://github.com/maximeKets/laravel-phantom-wallet',
            'live_url': '',
            'tech_stack': ['PHP', 'Laravel', 'Solana', 'Bootstrap', 'jQuery']
        },
        {
            'owner': 'maximeKets',
            'repo': 'react-bits',
            'title': 'React Bits Components',
            'description': 'An open source collection of animated, interactive & fully customizable React components for building stunning, memorable user interfaces.',
            'repo_url': 'https://github.com/maximeKets/react-bits',
            'live_url': '',
            'tech_stack': ['JavaScript', 'React']
        },
        {
            'owner': 'maximeKets',
            'repo': 'Cyril_portfolio',
            'title': 'Cyril Portfolio',
            'description': 'A React.js Nice Resume Template',
            'repo_url': 'https://github.com/maximeKets/Cyril_portfolio',
            'live_url': '',
            'tech_stack': ['JavaScript', 'React']
        },
        {
            'owner': 'maximeKets',
            'repo': 'Machine_learning_TD',
            'title': 'Diamond Price Regression',
            'description': 'TP Régression du prix des diamants',
            'repo_url': 'https://github.com/maximeKets/Machine_learning_TD',
            'live_url': '',
            'tech_stack': ['Jupyter Notebook', 'Python']
        },
        {
            'owner': 'maximeKets',
            'repo': 'AI-Art',
            'title': 'AI Art',
            'description': 'PyTorch (and PyTorch Lightning) implementation of Neural Style Transfer, Pix2Pix, CycleGAN, and Deep Dream!',
            'repo_url': 'https://github.com/maximeKets/AI-Art',
            'live_url': '',
            'tech_stack': ['Python', 'PyTorch']
        }
    ]

    for pd in projects_data:
        try:
            print(f"Processing repository: {pd['repo']}...")
            project_json = parser.create_project_json(
                owner=pd['owner'],
                repo=pd['repo'],
                title=pd['title'],
                description=pd['description'],
                repo_url=pd['repo_url'],
                live_url=pd['live_url'],
                tech_stack=pd['tech_stack']
            )

            # Save project JSON and get the path
            project_path = parser.save_project_json(project_json)
            print(f"✅ Project JSON saved to: {project_path}")
        except Exception as e:
            print(f"❌ Error processing {pd['repo']}: {e}")

if __name__ == '__main__':
    main()
