---
title: Cryptofile: Secure file explorer 
published: 2025-04-07
description: 'A set of tools for file encryption, including a secure file explorer and an automatic encryptor.'
image: ''
tags: [Projects, Python, Cybersec]
category: 'Projects'
draft: true 
lang: ''
---

## GitHub Repository 
::github{repo="Kenjibercysec/Cryptofile"}

--- 

# Explorador de Arquivos Seguro

Um conjunto de ferramentas para criptografia de arquivos, incluindo um explorador de arquivos seguro e um criptografador automático.

## Ferramentas Disponíveis

### 1. SecureExplorer.exe
Um explorador de arquivos com criptografia avançada e proteção por senha, compatível com Windows e Linux.

#### Características:
- Interface gráfica moderna e intuitiva
- Criptografia forte usando Fernet (AES-128-CBC)
- Proteção por senha com PBKDF2HMAC
- Compatível com Windows e Linux
- Navegação de arquivos integrada
- Criptografia e descriptografia de arquivos individuais

### 2. AutoEncryptor.exe
Um criptografador automático que protege arquivos nas pastas Documentos e Downloads com uma senha pré-definida.

#### Características:
- Criptografia automática de arquivos
- Senha pré-definida no código
- Interface simples e direta
- Criptografia em lote
- Feedback visual do progresso

## Requisitos

- Windows 10/11 ou Linux
- Python 3.8 ou superior (apenas para desenvolvimento)
- Bibliotecas listadas em `requirements.txt` (apenas para desenvolvimento)

## Instalação

### Para Usuários Finais:
1. Baixe os executáveis da pasta `dist`
2. Execute o programa desejado

### Para Desenvolvedores:
1. Clone este repositório
2. Instale as dependências:
```bash
pip install -r requirements.txt
```

## Uso

### SecureExplorer.exe
1. Execute o arquivo `SecureExplorer.exe`
2. Use a interface para navegar pelos arquivos
3. Para criptografar um arquivo:
   - Selecione o arquivo
   - Digite uma senha forte
   - Confirme a operação
4. Para descriptografar:
   - Selecione o arquivo criptografado
   - Digite a senha correta
   - O arquivo será restaurado

### AutoEncryptor.exe
1. Antes de usar, edite o arquivo `auto_encrypt.py` e altere a senha pré-definida:
```python
PREDEFINED_PASSWORD = "sua_senha_aqui"  # Altere para a senha desejada
```
2. Recompile o executável:
```bash
pyinstaller --onefile --windowed --name "AutoEncryptor" auto_encrypt.py
```
3. Execute o `AutoEncryptor.exe`
4. O programa irá automaticamente:
   - Criptografar todos os arquivos nas pastas Documentos e Downloads
   - Usar a senha pré-definida
   - Mostrar o progresso da operação

## Segurança

- Utiliza criptografia Fernet (AES-128-CBC)
- Implementa PBKDF2HMAC para derivação de chaves
- Senhas são processadas de forma segura
- Arquivos originais são removidos após criptografia
- Arquivos criptografados são removidos após descriptografia

## Avisos Importantes

1. **AutoEncryptor.exe**:
   - Criptografa automaticamente todos os arquivos nas pastas Documentos e Downloads
   - Mantenha a senha pré-definida em um lugar seguro
   - Faça backup dos arquivos importantes antes de usar
   - O processo não pode ser desfeito sem a senha correta

2. **SecureExplorer.exe**:
   - Use senhas fortes
   - Mantenha suas senhas em um lugar seguro
   - Faça backup dos arquivos importantes antes de criptografá-los
   - Não perca a senha, pois não há como recuperar arquivos sem ela

## Aviso Legal

Este software é fornecido "como está", sem garantias. O desenvolvedor não se responsabiliza por qualquer perda de dados ou problemas decorrentes do uso deste software. Use por sua conta e risco. 